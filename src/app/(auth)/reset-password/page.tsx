import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Reset Your Password</h2>
          <p className="text-gray-400">Enter your new password below.</p>
        </div>

        <form className="space-y-4">
          {/* New Password Field */}
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-400 mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Confirm New Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
              className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-primary text-white rounded-full px-4 py-3 font-medium hover:bg-opacity-90 transition-colors">
            Reset Password
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