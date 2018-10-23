import React, { PureComponent } from 'react'
import MaskedInputMUI from 'react-text-mask'

class MaskedInput extends PureComponent {
  render () {
    const { inputRef, mask, placeholderChar, showMask, ...other } = this.props

    return (
      <MaskedInputMUI
        {...other}
        ref={inputRef}
        mask={mask}
        placeholderChar={placeholderChar}
        showMask={showMask}
      />
    )
  }
}

export default MaskedInput
