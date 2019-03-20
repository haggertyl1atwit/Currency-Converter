import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    state = {
        bal: 1,
        newBal: 0,
        inputValue: '0'
    }

    usdToEuro = () => {
        this.setState({
            newBal: this.state.inputValue * 0.85 
        })
    }
    usdToPound = () => {
        this.setState({
            newBal: this.state.inputValue * 0.75 
        })
    }
    usdToRupee = () => {
        this.setState({
            newBal: this.state.inputValue * 67.6 
        })
    }
    usdToAussie = () => {
        this.setState({
            newBal: this.state.inputValue * 1.32 
        })
    }
    usdToCanada = () => {
        this.setState({
            newBal: this.state.inputValue * 1.3 
        })
    }
    usdToSwiss = () => {
        this.setState({
            newBal: this.state.inputValue * 0.99 
        })
    }
    usdToYuan = () => {
        this.setState({
            newBal: this.state.inputValue * 6.4 
        })
    }
    usdToYen = () => {
        this.setState({
            newBal: this.state.inputValue * 110.67 
        })
    }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                value={this.state.inputValue}
                onChangeText={this._handleTextChange}
                style={{ width: 200, height: 44, padding: 8, borderColor: 'red', borderWidth: 1, color: 'red', }}
                />
                <Text style={styles.paragraph}>
                    Currency Converter App
                </Text>
                
                <View style={styles.row}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.usdToEuro}
                    >
                        <Text style={styles.buttonText}>
                            USD to Euro
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.usdToPound}
                    >
                        <Text style={styles.buttonText}>
                            USD to Pound
                        </Text>
                    </TouchableHighlight>
                </View>    
                
                <View style={styles.row}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.usdToRupee}
                    >
                        <Text style={styles.buttonText}>
                            USD to Rupee
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.usdToAussie}
                    >
                        <Text style={styles.buttonText}>
                            USD to Aussie
                        </Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.row}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.usdToCanada}
                    >
                        <Text style={styles.buttonText}>
                            USD to Canada
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.usdToSwiss}
                    >
                        <Text style={styles.buttonText}>
                            USD to Swiss
                        </Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.row}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.usdToYuan}
                    >
                        <Text style={styles.buttonText}>
                            USD to Yuan
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.usdToYen}
                    >
                        <Text style={styles.buttonText}>
                            USD to Yen
                        </Text>
                    </TouchableHighlight>
                </View>    
                
                <Text style={styles.paragraph}>
                    USD: ${this.state.inputValue}
                </Text>
                
                <Text style={styles.paragraph}>
                    Converted: {this.state.newBal}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'red',
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        color: 'black',
        marginLeft: 10,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
    },
    paragraph: {
        marginBottom: 10,
        fontSize: 20,
    }
});