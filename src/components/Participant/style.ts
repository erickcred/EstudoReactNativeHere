import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    marginRight: 12,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  }
});