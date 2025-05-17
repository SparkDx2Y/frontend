import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Forgot Password?</h2>
          <p className="text-gray-400">Enter your email address to receive a password reset link.</p>
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

          {/* Submit Button */}
          <button type="submit" className="w-full bg-primary text-white rounded-full px-4 py-3 font-medium hover:bg-opacity-90 transition-colors">
            Send Reset Link
          </button>
        </form>

        {/* Optional: Link back to login */}
        <p className="text-center text-gray-400 text-sm">
          Remember your password?{' '}
          <Link href='/login' className="text-primary hover:text-primary/90"> Log In</Link>
        </p>
      </div>
    </AuthLayout>
  )
} 