import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Bot, User, Loader2, FileText, X, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  files?: { name: string; type: string; data: string }[];
  timestamp: Date;
}

export function FinanceGuru() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your Finance Guru. Upload your financial documents (statements, budgets, etc.), and I'll help you analyze them and provide personalized recommendations. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<{ name: string; type: string; data: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: { name: string; type: string; data: string }[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve) => {
        reader.onload = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
      });
      reader.readAsDataURL(file);
      const data = await base64Promise;
      newFiles.push({ name: file.name, type: file.type, data });
    }
    setSelectedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    if (!input.trim() && selectedFiles.length === 0) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      files: selectedFiles.length > 0 ? [...selectedFiles] : undefined,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setSelectedFiles([]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = "gemini-3-flash-preview";

      const parts: any[] = [{ text: input || "Analyze these files and provide recommendations." }];
      
      if (userMessage.files) {
        userMessage.files.forEach(file => {
          parts.push({
            inlineData: {
              data: file.data,
              mimeType: file.type
            }
          });
        });
      }

      const response = await ai.models.generateContent({
        model,
        contents: [{ parts }],
        config: {
          systemInstruction: "You are a professional financial advisor named Finance Guru. Analyze the provided financial documents and user queries to give expert, actionable, and personalized financial recommendations. Be concise, clear, and encouraging. Focus on saving, investing, and debt management strategies.",
        }
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text || "I'm sorry, I couldn't process that request. Please try again.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I encountered an error while processing your request. Please ensure your files are valid and try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-colors">
      {/* Header */}
      <div className="p-4 border-bottom border-gray-100 dark:border-gray-800 flex items-center gap-3 bg-gray-50/50 dark:bg-gray-800/50 transition-colors">
        <div className="p-2 bg-emerald-500 rounded-xl text-white">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Finance Guru</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">AI Financial Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
      >
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "flex gap-4 max-w-[80%]",
              message.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
              message.role === 'user' ? "bg-emerald-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            )}>
              {message.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div className="space-y-2">
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                message.role === 'user' 
                  ? "bg-emerald-500 text-white rounded-tr-none shadow-lg shadow-emerald-500/20" 
                  : "bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-700"
              )}>
                {message.content}
                
                {message.files && message.files.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/20 dark:border-gray-700/50 space-y-2">
                    <p className="text-[10px] font-bold uppercase opacity-70">Attached Files:</p>
                    {message.files.map((file, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs bg-white/10 dark:bg-gray-900/50 p-2 rounded-lg">
                        <FileText className="w-3 h-3" />
                        <span className="truncate max-w-[150px]">{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className={cn(
                "text-[10px] text-gray-400 dark:text-gray-500 font-bold",
                message.role === 'user' && "text-right"
              )}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4 mr-auto max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-700">
              <Loader2 className="w-5 h-5 text-emerald-500 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 transition-colors">
        {selectedFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedFiles.map((file, i) => (
              <div key={i} className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-300">
                <FileText className="w-3 h-3 text-emerald-500" />
                <span className="truncate max-w-[120px]">{file.name}</span>
                <button 
                  onClick={() => removeFile(i)}
                  className="p-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-end gap-3">
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask Finance Guru anything..."
              rows={1}
              className="w-full pl-4 pr-12 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none dark:text-gray-200 transition-colors"
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-emerald-500 transition-colors"
              title="Upload files"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.csv,.xlsx"
            />
          </div>
          <button 
            onClick={handleSend}
            disabled={isLoading || (!input.trim() && selectedFiles.length === 0)}
            className="p-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 disabled:opacity-50 disabled:hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-3 font-medium">
          Finance Guru can make mistakes. Check important financial info.
        </p>
      </div>
    </div>
  );
}
