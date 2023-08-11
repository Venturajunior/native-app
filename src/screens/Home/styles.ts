import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5a035a",
    justifyContent: 'center',
    padding: 16
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
  },
  input: {
    marginTop: 16,
    height: 56,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#212122',
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    marginTop: 16,
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  }
})