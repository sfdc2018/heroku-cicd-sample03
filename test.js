var message = process.env.MESSAGE || '?';
if (message != "TEST") {
    process.exit(1);
}
process.exit(0);
