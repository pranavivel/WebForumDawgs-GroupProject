
import { NextResponse } from 'next/server';
import connectMongoDB from '../../../config/mongodb';

export async function GET() {
  try {
    await connectMongoDB();
    return NextResponse.json({ message: 'Successfully connected to MongoDB' });
  } catch (error) {
     console.error('Error connecting to MongoDB', error);
         return NextResponse.json({ message: 'Error connecting to MongoDB', error: (error as Error).message}, { status: 500 });

  }
}
