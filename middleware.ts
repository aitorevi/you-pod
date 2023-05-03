// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// import process from "process";
// import {useSession} from "next-auth/react";
// export async function middleware(req: NextRequest) {
//     const {data: session} = useSession()
//    // const session = await getToken({ req, secret: process.env.JWT_SECRET });
//     if (!session) {
//         const requestedPage = req.nextUrl.pathname;
//         const url = req.nextUrl.clone();
//         url.pathname = `/`;
//         url.search = `p=${requestedPage}`;
//         return NextResponse.redirect('/');
//     }
//
//     return NextResponse.next();
// }
// export const config = {
//     matcher: ['/podcast', '/newsletter', '/admin']
// };

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
//
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/about-2', request.url))
// }
//
// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/podcast/:path*',
// }