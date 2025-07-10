"use client";
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'
import { useRef, useState } from "react";
import { getFile, uploadFile } from "@/components/storage";


export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody

  try {

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState(null);
    //const inputRef = useRef(null);

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () =>
        // pathname
        // clientPayload
        {
          // Generate a client token for the browser to upload the file
          // ⚠️ Authenticate and authorize users before generating the token.
          // Otherwise, you're allowing anonymous uploads.
          return {
            allowedContentTypes: ['image/*'],
            addRandomSuffix: true,
            maximumSizeInBytes: 50 * 1024 * 1024, // 50MB
          }
        },
      onUploadCompleted: async ({ blob, tokenPayload }) => {

        //const folder = "user/";
        //const imagePath = await uploadFile(selectedFile, folder);
        //const imageUrl = await getFile(imagePath);
        
        // Get notified of client upload completion
        // ⚠️ This will not work during development (localhost),
        // Unless you use ngrok or a similar service to expose and test your local server
        console.log('blob upload completed', blob, tokenPayload)
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 } // The webhook will retry 5 times waiting for a 200
    )
  }
}
