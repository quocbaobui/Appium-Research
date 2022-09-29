import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: const Key('home_screen_key'),
      appBar: AppBar(
        title: const Text('Home Screen'),
      ),
    );
  }
}
