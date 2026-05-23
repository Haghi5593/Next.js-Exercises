import {NextRequest, NextResponse} from 'next/server';

interface Params {
  username: string;
}


export async function GET(
  request: NextRequest,
  { params }: { params: Params}
) {
  return NextResponse.json({
    username: params.username,
  });
}

export async function POST(
  request: NextRequest,
  params: Params
) {
  const body = await request.json();

  return NextResponse.json({
    username: params.username,
    message: "Username request received",
    data: body,
  });
}