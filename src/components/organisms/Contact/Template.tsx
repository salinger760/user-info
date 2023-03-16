type Props = {
  children: JSX.Element
  prevFromStep: () => void
  currentStep: number
}

const backButton = (prevFromStep: () => void) => {
  return <button onClick={prevFromStep}>Back</button>
}

const FormTemplate = ({ children, prevFromStep, currentStep }: Props): JSX.Element => {
  return (
    <>
      {children}
      {0 < currentStep && currentStep < 2 && backButton(prevFromStep)}
    </>
  )
}

export default FormTemplate
