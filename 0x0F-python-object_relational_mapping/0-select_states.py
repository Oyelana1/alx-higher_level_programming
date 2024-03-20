#!/usr/bin/python3

import MySQLdb
import sys

def list_states(username, password, database):
    # Connect to MySQL server
    try:
        connection = MySQLdb.connect(
            host='localhost',
            port=3306,
            user=username,
            passwd=password,
            db=database
        )
        cursor = connection.cursor()

        # Execute SQL query
        cursor.execute("SELECT * FROM states ORDER BY id ASC")

        # Fetch all rows
        states = cursor.fetchall()

        # Display results
        for state in states:
            print(state)

        # Close cursor and connection
        cursor.close()
        connection.close()
    except MySQLdb.Error as e:
        print("Error:", e)

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script.py <username> <password> <database>")
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    list_states(username, password, database)
