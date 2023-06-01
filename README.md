# react-native-confirmation
<h4>Version 1.0.0</h4>
<h2>Installation</h2>
<li>NPM: npm i react-native-confirmation</li>
<li>Yarn: yarn add react-native-confirmation</li>

<h2>Usage Example</h2>

```
import ConfirmationModal from "react-native-confirmation";
import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState<string>("");
  
  const clearText = () => {
    setText("");
  };

  return (
    <>
      <Button onPress={() => setIsVisible(true)} />
      <Text>{text}</Text>
      <TextInput
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={() => setText(input)}
          value={input}
          style={styles.input}
          placeholder="Message"
      />
      <ConfirmationModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onConfirm={clearText}
        message="Are you sure you want to clear the text?"
      />
    </>
  );
};

export default TabOneScreen;
```
<h2>Examples</h2>

![Simulator Screenshot - iPhone 13 mini - 2023-05-31 at 21 45 50](https://github.com/alecdhansen/react-native-confirmation/assets/25291098/a1c41d1c-5ebb-4900-9c82-1fd15971bb68)
![Simulator Screenshot - iPhone 13 mini - 2023-05-31 at 21 45 31](https://github.com/alecdhansen/react-native-confirmation/assets/25291098/452e3dab-d108-4547-a311-2c03e44e5ec5)


https://github.com/alecdhansen/react-native-confirmation/assets/25291098/4770c1ef-2736-40ad-8b55-b4e51b791cff

<h2>Props</h2>
<ul>
<li><strong>isVisible</strong> - <em>bool</em> - boolean state of the confirmation modal <em>default: false</em></li> 
<li><strong>setIsVisible</strong> - <em>isVisible: bool => void</em></li> 
<li><strong>onConfirm</strong> - <em>any</em> - pass in any function you'd like to run on confirm press</li> 
<li><strong>message</strong> - <em>string</em> - message to display to users before asking them to "confirm" or "cancel"</li> 
</ul>

