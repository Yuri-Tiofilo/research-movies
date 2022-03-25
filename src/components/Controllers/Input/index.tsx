import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback
} from 'react'
import { IconBaseProps } from 'react-icons'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
}
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)

      setIsFilled(!!inputRef.current?.value)
    },
    []
  )

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} style={{ marginRight: 10 }} />}
      <input
        onFocus={handleInputFocus}
        onBlur={e => handleInputBlur(e)}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export { Input }
