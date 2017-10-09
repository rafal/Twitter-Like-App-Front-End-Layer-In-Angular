class Greeter{
  saySomething(message: string = 'whats up'){
    return message + ' something';
  }
}

var greeter = new Greeter();
greeter.saySomething('hello');