import {NextResponse} from 'next/server'
import {getToken} from "next-auth/jwt";

const privateRoutes = ["/my-bookings", "/booking", "/profile", "/admin"];
const authRoutes = ["/auth"];

export async function proxy(request) {
    const token = await getToken({req: request})
    const reqUrl = request.nextUrl.pathname;
    const isAuthenticated = Boolean(token);
    const isPrivateRoute = privateRoutes.some((route) => reqUrl.startsWith(route))
    const isAuthRoute = authRoutes.some((route) => reqUrl.startsWith(route))

    if (!isAuthenticated && isPrivateRoute) {
        return NextResponse.redirect(
            new URL(`/auth/login?callbackUrl=${reqUrl}`, request.url)
        );
    }

    if (isAuthenticated && isAuthRoute) {
        return NextResponse.redirect(new URL('/', request.url))
    }


    return NextResponse.next();
}

export const config = {
    matcher: [
        "/my-bookings/:path",
        "/booking/:path",
        "/profile/:path",
        "/admin/:path",
        "/auth/:path"
    ],
}
