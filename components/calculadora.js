import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { styles } from "../styles/styles";

export default class Calculadora extends Component {
  state = {
    display: "0",
    num1: "",
    num2: "",
    operacao: "",
    button: true,
    dark: true,
  };

  calcular() {
    if (
      this.state.num1 == "" ||
      this.state.num2 == "" ||
      this.state.operacao == ""
    ) {
      return this.setState({ display: "Verifique os campos" });
    } else {
      switch (this.state.operacao) {
        case "+":
          this.setState({
            display: String(Number(this.state.num1) + Number(this.state.num2)),
          });
          break;
        case "-":
          this.setState({
            display: String(Number(this.state.num1) - Number(this.state.num2)),
          });
          break;
        case "*":
          this.setState({
            display: String(Number(this.state.num1) * Number(this.state.num2)),
          });
          break;
        case "/":
          this.setState({
            display: String(Number(this.state.num1) / Number(this.state.num2)),
          });
          break;
      }
    }
  }

  render() {
    return (
      <SafeAreaView
        style={this.state.dark ? styles.container : styles.lightContainer}
      >
        <TouchableOpacity
          style={styles.darkModeButton}
          onPress={() => {
            this.setState({ dark: !this.state.dark });
          }}
        >
          <Text
            style={this.state.dark ? styles.darkModeText : styles.lightModeText}
          >
            {this.state.dark ? "Light Mode" : "Dark Mode"}
          </Text>
        </TouchableOpacity>
        <Text
          style={
            this.state.dark
              ? styles.textButtonOperacao
              : styles.textButtonOperacaoLight
          }
        >
          {this.state.operacao}
        </Text>
        <Text style={styles.display}>{this.state.display}</Text>

        <TextInput
          onChangeText={(target) => {
            const regex = /\D/g;
            if (regex.test(target)) {
              this.setState({ display: "Apenas números" });
            } else {
              this.setState({ num1: target });
              this.setState({ display: "0" });
            }

            setTimeout(() => {
              if (
                this.state.num2 != "" &&
                this.state.operacao != "" &&
                this.state.num1 != ""
              ) {
                this.setState({ button: false });
              } else {
                this.setState({ button: true });
              }
            }, 50);
          }}
          value={this.state.num1}
          style={this.state.dark ? styles.textInput : styles.textInputLight}
          placeholder="Número 1"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ operacao: "+" });

              setTimeout(() => {
                if (
                  this.state.num2 != "" &&
                  this.state.operacao != "" &&
                  this.state.num1 != ""
                ) {
                  this.setState({ button: false });
                } else {
                  this.setState({ button: true });
                }
              }, 50);
            }}
            style={
              this.state.dark ? styles.buttonStyle : styles.lightButtonStyle
            }
          >
            <Text
              style={
                this.state.dark ? styles.textButton : styles.textButtonLight
              }
            >
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ operacao: "*" });

              setTimeout(() => {
                if (
                  this.state.num2 != "" &&
                  this.state.operacao != "" &&
                  this.state.num1 != ""
                ) {
                  this.setState({ button: false });
                } else {
                  this.setState({ button: true });
                }
              }, 50);
            }}
            style={
              this.state.dark ? styles.buttonStyle : styles.lightButtonStyle
            }
          >
            <Text
              style={
                this.state.dark ? styles.textButton : styles.textButtonLight
              }
            >
              *
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ operacao: "-" });

              setTimeout(() => {
                if (
                  this.state.num2 != "" &&
                  this.state.operacao != "" &&
                  this.state.num1 != ""
                ) {
                  this.setState({ button: false });
                } else {
                  this.setState({ button: true });
                }
              }, 50);
            }}
            style={
              this.state.dark ? styles.buttonStyle : styles.lightButtonStyle
            }
          >
            <Text
              style={
                this.state.dark ? styles.textButton : styles.textButtonLight
              }
            >
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ operacao: "/" });

              setTimeout(() => {
                if (
                  this.state.num2 != "" &&
                  this.state.operacao != "" &&
                  this.state.num1 != ""
                ) {
                  this.setState({ button: false });
                } else {
                  this.setState({ button: true });
                }
              }, 50);
            }}
            style={
              this.state.dark ? styles.buttonStyle : styles.lightButtonStyle
            }
          >
            <Text
              style={
                this.state.dark ? styles.textButton : styles.textButtonLight
              }
            >
              /
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          onChangeText={(target) => {
            const regex = /\D/g;
            if (regex.test(target)) {
              this.setState({ display: "Apenas números" });
            } else {
              this.setState({ num2: target });
              this.setState({ display: "0" });
            }

            setTimeout(() => {
              if (
                this.state.num2 != "" &&
                this.state.operacao != "" &&
                this.state.num1 != ""
              ) {
                this.setState({ button: false });
              } else {
                this.setState({ button: true });
              }
            }, 50);
          }}
          value={this.state.num2}
          style={this.state.dark ? styles.textInput : styles.textInputLight}
          placeholder="Número 2"
        />
        <TouchableOpacity
          onPress={() => this.calcular()}
          style={
            this.state.button == false
              ? styles.sendButtonStyle
              : styles.disabledSendButtonStyle
          }
          disabled={this.state.button}
        >
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
