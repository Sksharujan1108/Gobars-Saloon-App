import { Keyboard, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { styles } from "./styles";

const CELL_COUNT = 4;

interface renderCellProps {
    index: number;
    symbol: string;
    isFocused: boolean;
}

interface EmailOtpFieldProps {
    onFulfill?: (value: string) => void;
    value?: string;
    onChangeValue?: (value: string) => void;
    onPress?: (value?: string) => void;
    maskEnable?: boolean;
}

const EmailOtpField = (props: EmailOtpFieldProps) => {
    const {
      onChangeValue,
      maskEnable,
    } = props;

  const [enableMask, setEnableMask] = useState<boolean | undefined>(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [value, setValue] = useState<string>('');
  const codeFieldRef = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useMemo(() => {
    onChangeValue && onChangeValue(value);
  }, [value])

  useMemo(() => {
    setEnableMask(maskEnable);
  }, [maskEnable]);

  const renderCell = ({index, symbol, isFocused}: renderCellProps) => {
    let textChild = null;

    if(symbol) {
        textChild = symbol;
    //   textChild = enableMask ? '*' : symbol
    } else if (isFocused) {
        textChild = <Cursor />
    }
    return (
        <View
            style={[
                styles.cell,
                isFocused && styles.focusCell
            ]}
        key={index}
        onLayout={getCellOnLayoutHandler(index)}
        >
            <Text style={styles.cellText}>
                {textChild}
            </Text>
        </View>
    )
  }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { 
            setIsKeyboardVisible(true)
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

  return (
    <View style = {styles.root}>
      <CodeField
        ref={codeFieldRef}
        {...codeFieldProps}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType={"number-pad"}
        textContentType={"oneTimeCode"}
        renderCell={renderCell}
      />
    </View>
  );
};

export default EmailOtpField;
