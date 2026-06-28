public class Logger {

    // a private and static instance:
    private static Logger instance;

    private Logger() {
        System.out.println("Logger instance created.");
    }

    public static Logger getInstance() {
        if(instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Logging Method
    public void log(String message) {
        System.out.println("LOG: "+message);
    }
}
