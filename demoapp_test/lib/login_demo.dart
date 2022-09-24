import 'package:demoapp_test/home_demo.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  TextEditingController idController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  TextEditingController userNameContorller = TextEditingController();

  @override
  void dispose() {
    idController.dispose();
    passwordController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              enabled: true,
              controller: idController,
              key: const Key('id_key'),
              decoration: const InputDecoration(hintText: 'Id'),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              enabled: true,
              controller: userNameContorller,
              key: const Key('userName_key'),
              decoration: const InputDecoration(hintText: 'Username'),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              enabled: true,
              controller: passwordController,
              key: const Key('password_key'),
              decoration: const InputDecoration(hintText: 'Password'),
            ),
          ),
          Container(
            width: MediaQuery.of(context).size.width,
            padding: const EdgeInsets.only(top: 54, left: 54, right: 54),
            child: ElevatedButton(
              key: const Key('btn_login_key'),
              onPressed: () {
                if (idController.text == '12' &&
                    userNameContorller.text == 'admin' &&
                    passwordController.text == '123456') {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: ((context) => const HomeScreen())));
                }
              },
              child: const Text('Login'),
            ),
          )
        ],
      ),
    );
  }
}
