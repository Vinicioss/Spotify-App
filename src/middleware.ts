import { NextResponse, NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';


export async function middleware(req: NextRequest, res: NextResponse, next: () => void) {
    const session = await getSession({ req });
  
    if (!session) {
        redirect(res, '/login');
    } else {
      next();
    }
  }




// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(req) {

//     const token = await getToken({ req, secret: process.env.JWT_SECRET });
    
//     const { pathname, origin } = req.nextUrl;

//     if (pathname.includes('/api/auth') || token) {
//         return NextResponse.next();
//     }

//     if (!token && pathname !== '/login') {
//         console.log(pathname)
//         return NextResponse.redirect(`/login`);
//     }
// }