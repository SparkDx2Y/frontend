import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to continue to Spark</p>
        </div>

        
    {/* Social Login Buttons */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Facebook */}
      <button className="w-full flex items-center justify-center px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        Facebook
      </button>
      {/* Google */}
      <button className="w-full flex items-center justify-center px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
        <FcGoogle className="w-5 h-5 mr-2" />
        Google
      </button>
    </div>

    <div className="relative text-center text-gray-500 py-2">
      <span className="bg-black px-2 relative z-10">Or continue with</span>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-700 z-0" />
    </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="text-right mb-4">
            <Link href="/forgot-password" className="text-primary hover:text-primary/90 text-sm">Forgot Password?</Link>
          </div>
          <button className="w-full bg-primary text-white rounded-full px-4 py-3 font-medium hover:bg-opacity-90 transition-colors">
            Log In
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          DOn&apos;t have an account?{' '}
          <Link href='/signup' className="text-primary hover:text-primary/90"> Create Account</Link>
        </p>
      </div>
    </AuthLayout>
  )
}