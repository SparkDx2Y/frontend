import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc';

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          {/* Title for the signup page */}
          <h2 className="text-2xl font-bold text-white mb-2">Sign Up</h2>
          {/* Optional: A subtitle if needed */}
          <p className="text-gray-400">Create your account to join Spark</p>
        </div>

        <form className="space-y-4">

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-primary text-white rounded-full px-4 py-3 font-medium hover:bg-opacity-90 transition-colors">
            View Singles
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center">
            By clicking &quot;View Singles&quot; or &quot;Sign Up&quot;, you agree to our Terms of Use and Privacy Policy.
          </p>
        </form>

        {/* Social Sign Up Buttons */}
        <div className="my-6 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-4">Or sign up with</p>
          <div className="flex space-x-6">
            {/* Facebook Social Button with SVG */}
            <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 text-gray-300 hover:bg-blue-900 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300" aria-label="Sign up with Facebook" >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            {/* Google Social Button with React Icon */}
            <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 text-gray-300 hover:bg-red-900 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300"  aria-label="Sign up with Google" >
              <FcGoogle className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Already have an account link */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <Link href='/login' className="text-primary hover:text-primary/90"> Log In</Link>
        </p>
      </div>
    </AuthLayout>
  )
}
