import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[500px] overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-end">
        <div className="max-w-xl">
          <p className="text-teal-300 text-xs font-medium tracking-widest uppercase">Hospital OS</p>
          <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
            Clinical Command Center
          </h1>
          <p className="mt-2 text-slate-200/90 text-sm">
            Real-time overview of patient safety signals, bed capacity, and care operations. Designed for speed, clarity, and confident decision-making.
          </p>
        </div>
      </div>
    </div>
  )
}
