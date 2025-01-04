import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1C',
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#ffffff',
    padding: 16,
    marginRight: 12,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  listEmptyText: {
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 20,
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonCancel: {
    
  }
});