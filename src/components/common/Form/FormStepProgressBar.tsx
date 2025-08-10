import classNames from 'classnames'

interface StepProgressBarProps {
  current: number
  maxStep: number
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({
  current,
  maxStep,
}) => {
  const steps = Array.from({ length: maxStep }, (_, index) => index + 1)

  return (
    <div className="flex flex-col items-start w-full gap-2">
      <span className="text-sm text-[#7A7A7A]">
        Passo {current + 1} de {maxStep}
      </span>

      <ul className="flex flex-wrap items-center w-full gap-2">
        {steps.map((step) => (
          <li key={step} className="flex flex-1">
            <div
              className={classNames(
                'flex-1 h-1 rounded transition-opacity',
                step === current + 1 ? 'bg-[#242424]' : 'bg-[#D9D9D9]',
              )}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StepProgressBar
