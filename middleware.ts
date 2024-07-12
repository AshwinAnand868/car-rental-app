import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/', '(.*media\.graphassets\.com.*)', '(.*source\.unsplash\.com.*)']
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)', '/ThankYou'],
};

// export function middleware(request: NextRequest) {
//   const requestPath = new URL(request.url).pathname;
//   const headersList = headers();
//   console.log(headersList);

//   if (requestPath === '/ThankYou') {
//     try {
//       const referer = request.headers.get('referer');
//       console.log('MIDDLEWARE')
//       console.log(request.url);
//       console.log(referer);
  
//       if(!referer || !referer.startsWith('https://checkout.stripe.com')) {
//         return NextResponse.redirect(new URL('/', request.url))
//       }
  
//       return NextResponse.next();
//     } catch (error) {
//       return NextResponse.redirect(new URL('/', request.url)); 
//     }
//   }

//   return NextResponse.next();
  
// }

 