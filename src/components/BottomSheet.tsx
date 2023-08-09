import { PropsWithChildren } from 'react';

import {
  Dimensions,
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

type Props = PropsWithChildren & {
  onClose: () => void
  title: string
}

const BottomSheet = ({ children, onClose, title }: Props) => {
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => onClose()}>
          <View style={styles.dimBackground} />
        </TouchableWithoutFeedback>
        <View style={styles.dialog}>
          <View style={styles.contentHeader}>
            <Text style={{ flex: 1, fontSize: scale(17), color: "black", fontWeight: 'bold' }}>
              {title}
            </Text>
            <TouchableOpacity onPress={() => onClose()}>
              <View style={styles.closeContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: scale(17), color: "black", }}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ padding: scale(20) }}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    position: 'relative',
  },
  dimBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.3,
  },
  dialog: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: "50%",
    backgroundColor: 'white',
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
  },
  contentHeader: {
    flexDirection: 'row',
    padding: moderateScale(20),
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  closeContainer: {
    borderRadius: scale(100),
    width: scale(30),
    height: scale(30),
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
});