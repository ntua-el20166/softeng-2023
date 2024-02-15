import os
import subprocess
import unittest
from parameterized import parameterized
from fuzzywuzzy import fuzz

class TestCLI(unittest.TestCase):
    def run_command(self, command):
        result = subprocess.run(
            f"se2349 {command}",
            shell=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            encoding='utf-8',  # Specify the encoding for decoding the subprocess output
        )
        return result.stdout.strip()
    
    def read_expected_output(self, test_number):
        expected_output_file = os.path.join("expected_outputs", f"test{test_number}.txt")
        with open(expected_output_file, "r", encoding="utf-8") as file:
            return file.read().strip()


    @parameterized.expand([
        (1, "Expected output for title command with titleid"),
        (2, "Expected output for title command with titleid and another format"),
        (3, "Expected output for healthcheck command"),
        (4, "Expected output for healthcheck command with format"),
        (5, "Expected output for searchtitle command with titlepart"),
        (6, "Expected output for searchtitle command with another titlepart and format"),
        (7, "Expected output for bygenre command with genre, min, and format"),
        #(8, "Expected output for bygenre command with genre, min, to, and format"),
        #(9, "Expected output for bygenre command with genre, min, from, and format"),
        (10, "Expected output for bygenre command with genre, min, from, to, and format"),
        (11, "Expected output for bygenre command with genre, min, and format"),
        #(12, "Expected output for bygenre command with genre, min, to, and format"),
        (13, "Expected output for bygenre command with genre, min, from, to, and format"),
        #(14, "Expected output for bygenre command with genre, min, from, and format"),
        (15, "Expected output for name command with nameid"),
        (16, "Expected output for name command with another nameid and format"),
        (17, "Expected output for searchname command with name"),
        (18, "Expected output for searchname command with another name and format"),
        # ... add more test cases as needed
    ])
    

    def test_commands(self, test_number, expected_output):
        command = self.get_command_for_test(test_number)
        actual_output = self.run_command(command)
        expected_output_file = self.read_expected_output(test_number)

        # Preprocess and normalize the outputs
        actual_output = self.normalize_output(actual_output)
        expected_output_file = self.normalize_output(expected_output_file)

        # Use fuzzy matching with a threshold
        similarity_ratio = fuzz.ratio(actual_output, expected_output_file)
        self.assertGreater(similarity_ratio, 90)  # Adjust the threshold as needed


    def normalize_output(self, output):
        # Add your normalization logic here
        # For example, you can remove extra whitespaces and normalize line endings
        return output.replace(" ", "").replace("\n", "")



    def get_command_for_test(self, test_number):
        # Define a mapping of test numbers to commands
        test_commands = {
            1: "title --titleID 550",
            2: "title --titleID 789 --format csv",
            3: "healthcheck",
            4: "healthcheck --format csv",
            5: 'searchtitle --titlepart fight',
            6: 'searchtitle --titlepart "fight club" --format csv',
            7: 'bygenre --genre Action --min 2',
            #8: 'bygenre --genre Comedy --min 5 --to 2022',
            #9: 'bygenre --genre Drama --min 7 --from 1980',
            10: 'bygenre --genre Romance --min 8 --from 1970 --to 1990',
            11: 'bygenre --genre Action --min 5 --format csv',
            #12: 'bygenre --genre Fantasy --min 4 --to 2015 --format csv',
            13: 'bygenre --genre Mystery --min 8 --from 1985 --to 2005 --format csv',
            #14: 'bygenre --genre Thriller --min 6 --from 1975 --format csv',
            15: 'name --nameid 45',
            16: 'name --nameid 31 --format csv',
            17: 'searchname --name hanks',
            18: 'searchname --name pitt --format csv',
            #... add more test cases as needed
        }
        return test_commands.get(test_number, "")

if __name__ == '__main__':
    unittest.main()
