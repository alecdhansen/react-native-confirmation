# react-native-confirmation

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Xcode](https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white)

<h2>Installation</h2>
<h3>NPM</h3>

```
npm i react-native-confirmation
```

<h3>Yarn</h3>

```
yarn add react-native-confirmation
```

<h2>Usage Example</h2>

```
import { useState } from "react";
import { Button, TextInput, Text } from "react-native"
import ConfirmationModal from "react-native-confirmation";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const clearText = () => {
    setText("");
    console.log("Text cleared!")
  };

  return (
    <>
      <Button onPress={() => setIsVisible(true)} />
      <TextInput
          onChangeText={setInput}
          onSubmitEditing={() => setText(input)}
          value={input}
          placeholder="Message"
      />
      <Text>{text}</Text>
      <ConfirmationModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onConfirm={clearText}
      />
    </>
  );
};

export default App;
```

<h2>Examples</h2>

![Simulator Screenshot - iPhone 13 mini - 2023-09-29 at 00 58 23](https://github.com/alecdhansen/react-native-confirmation/assets/25291098/6f1d662c-eeb6-46df-b498-d453e627bf5f)
![Simulator Screenshot - iPhone 13 mini - 2023-09-29 at 00 57 08](https://github.com/alecdhansen/react-native-confirmation/assets/25291098/fa76fb2a-7241-4bce-8214-83de88f14c3e)
![Simulator Screenshot - iPhone 13 mini - 2023-09-29 at 00 55 32](https://github.com/alecdhansen/react-native-confirmation/assets/25291098/7199f36e-c6ee-4645-9222-17185ea14ccd)
![Simulator Screenshot - iPhone 13 mini - 2023-09-29 at 00 53 46](https://github.com/alecdhansen/react-native-confirmation/assets/25291098/48877f4f-0e1e-46b2-9501-800235d65a85)

<h4>Video Example</h4>
https://github.com/alecdhansen/react-native-confirmation/assets/25291098/4770c1ef-2736-40ad-8b55-b4e51b791cff

<h2>Props</h2>

| **Prop**                  | **Type**                        | **Description**                                                                        | **Default**         |
| ------------------------- | ------------------------------- | -------------------------------------------------------------------------------------- | ------------------- |
| _isVisible_               | _bool_                          | Boolean state of the confirmation modal                                                | false               |
| _setIsVisible_            | _isVisible: bool => void_       |                                                                                        |                     |
| _onConfirm_               | _any_                           | Pass in any function you'd like to run onConfirm press                                 |                     |
| _secondaryOnConfirm?_     | _any_                           | Pass a second function as another option you'd like to run on secondaryOnConfirm press |                     |
| _secondaryOnConfirmText?_ | _string_                        | Custom secondary "confirm" text                                                        | "Delete"            |
| _message?_                | _string_                        | Optional message to display to users before asking them to "Confirm" or "Cancel"       |                     |
| _onConfirmText?_          | _string_                        | Custom "confirm" text                                                                  | "Confirm"           |
| _onConfirmTextColor?_     | _string_                        | Custom "confirm" text color                                                            | "rgb(227, 43, 44)"  |
| _cancelText?_             | _string_                        | Custom "cancel" text                                                                   | "Cancel"            |
| _cancelTextColor?_        | _string_                        | Custom "cancel" text color                                                             | "rgb(56, 124, 254)" |
| _colorScheme?_            | _"system" \| "light" \| "dark"_ | Colors scheme of the confirmation modal component                                      | "system"            |

<!-- https://www.tablesgenerator.com/markdown_tables# -->
