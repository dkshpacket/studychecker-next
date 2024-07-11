"use client";
import React, { useRef, useState } from "react";

import TextareaMarkdown, {
  TextareaMarkdownRef,
} from "textarea-markdown-editor";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Pencil, Columns, Eye, Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/components/submit-button";
export interface File {
  filename: string;
  content: string;
  id: string;
}

const Preview: React.FC<{ content: string }> = ({ content }) => (
  <div className="overflow-y-auto w-full h-full bg-white  ">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeAutolinkHeadings,
        [rehypePrism, { ignoreMissing: true }],
      ]}
      className="prose prose-neutral prose-sm max-w-none p-4 min-h-60 w-full h-full break-all"
    >
      {content}
    </ReactMarkdown>
  </div>
);

const Editor: React.FC<{}> = ({}) => {
  const [layout, setLayout] = useState<"editor" | "both" | "preview">("editor");
  const [content, setContent] = useState("");
  const ref = useRef<TextareaMarkdownRef>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className={`editor w-full ${layout != "both" ? "max-w-5xl " : ""}`}>
      <div className="flex justify-between max-w-min gap-2 mb-2">
        <Label htmlFor="editor" className="sr-only">
          Layout
        </Label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setLayout("editor");
          }}
          value="editor"
          tabIndex="-1"
          className={`p-2 rounded-md select-none border text-neutral-600 transition focus:bg-blue-200 `}
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setLayout("both");
          }}
          tabIndex="-1"
          value="both"
          className={`p-2 rounded-md border text-neutral-600 transition focus:bg-blue-200 `}
        >
          <Columns size={16} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setLayout("preview");
          }}
          value="preview"
          tabIndex="-1"
          className={`p-2 rounded-md border text-neutral-600 transition focus:bg-blue-200 `}
        >
          <Eye size={16} />
        </button>
      </div>

      <textarea name="content" hidden readOnly value={content} />

      <div className="overflow-hidden">
        {layout == "editor" && (
          <TextareaMarkdown.Wrapper ref={ref}>
            <textarea
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className={`max-w-none text-sm outline-none scrollbar p-4 w-full border font-mono min-h-60 resize-none rounded-md `}
            />
          </TextareaMarkdown.Wrapper>
        )}
        {layout == "preview" && (
          <div className="border rounded-md overflow-hidden">
            <Preview content={content} />
          </div>
        )}
        {layout == "both" && (
          <>
            {/* @ts-ignore */}
            <ResizablePanelGroup
              direction="horizontal"
              className="border rounded-md"
            >
              <ResizablePanel>
                <TextareaMarkdown.Wrapper ref={ref}>
                  <textarea
                    placeholder="내용을 입력해주세요."
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    className="text-sm outline-none scrollbar p-4 w-full font-mono h-full resize-none "
                  />
                </TextareaMarkdown.Wrapper>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel>
                <Preview content={content} />
              </ResizablePanel>
            </ResizablePanelGroup>
          </>
        )}
      </div>
    </div>
  );
};
export default Editor;
