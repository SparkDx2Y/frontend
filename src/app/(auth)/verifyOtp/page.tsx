import AuthLayout from '@/components/AuthLayout'

export default function OtpPage() {
  return (
    <AuthLayout>
      <div className="space-y-6 text-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">OTP Verification</h2>
          <p className="text-gray-400">Enter the 6-digit code sent to your email</p>
        </div>

        {/* OTP Input */}
        <form className="space-y-6">
          <div className="flex justify-center gap-3">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center text-2xl bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-full px-4 py-3 font-medium hover:bg-opacity-90 transition-colors"
          >
            Verify
          </button>
        </form>

        <p className="text-sm text-gray-400">
          Didn&apos;t receive the code?{' '}
          <button className="text-primary hover:underline">Resend OTP</button>
        </p>
      </div>
    </AuthLayout>
  )
}
