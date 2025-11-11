fn main() {
    let mut input = String::new();

    println!("Welcome to the basic calculator!");

    loop {
        println!("Enter an operation (+, -, *, /): ");
        std::io::stdin().read_line(&mut input).expect("Failed to read line");

        match input.trim().parse::<char>() {
            '+' => {
                let mut num1 = String::new();
                let mut num2 = String::new();

                println!("Enter the first number: ");
                std::io::stdin().read_line(&mut num1).expect("Failed to read line");

                println!("Enter the second number: ");
                std::io::stdin().read_line(&mut num2).expect("Failed to read line");

                let num1: f64 = num1.trim().parse().expect("Failed to parse number");
                let num2: f64 = num2.trim().parse().expect("Failed to parse number");

                println!("The result is: {}", num1 + num2);
            },
            '-' => {
                let mut num1 = String::new();
                let mut num2 = String::new();

                println!("Enter the first number: ");
                std::io::stdin().read_line(&mut num1).expect("Failed to read line");

                println!("Enter the second number: ");
                std::io::stdin().read_line(&mut num2).expect("Failed to read line");

                let num1: f64 = num1.trim().parse().expect("Failed to parse number");
                let num2: f64 = num2.trim().parse().expect("Failed to parse number");

                println!("The result is: {}", num1 - num2);
            },
            '*' => {
                let mut num1 = String::new();
                let mut num2 = String::new();

                println!("Enter the first number: ");
                std::io::stdin().read_line(&mut num1).expect("Failed to read line");

                println!("Enter the second number: ");
                std::io::stdin().read_line(&mut num2).expect("Failed to read line");

                let num1: f64 = num1.trim().parse().expect("Failed to parse number");
                let num2: f64 = num2.trim().parse().expect("Failed to parse number");

                println!("The result is: {}", num1 * num2);
            },
            '/' => {
                let mut num1 = String::new();
                let mut num2 = String::new();

                println!("Enter the first number: ");
                std::io::stdin().read_line(&mut num1).expect("Failed to read line");

                println!("Enter the second number: ");
                std::io::stdin().read_line(&mut num2).expect("Failed to read line");

                let num1: f64 = num1.trim().parse().expect("Failed to parse number");
                let num2: f64 = num2.trim().parse().expect("Failed to parse number");

                if num2 == 0.0 {
                    println!("Cannot divide by zero!");
                } else {
                    println!("The result is: {}", num1 / num2);
                }
            },
            _ => println!("Invalid operation"),
        }
    }
}
