Step to Run the Application :
Install all dependenciesof node.jd from package.json using command npm install
Type command npm install path --save
After all dependencies installation just go into bin directory from cmd and type command nodemon www or node www
Open the browser http://localhost:3005 

_________________________________________________________________________________________________________________________________________
DB Configurations :
Please fill ditails for connection of db in mysqldb.js
Run the following quries :

-- Dumping structure for table searchapp.userdetails
CREATE TABLE IF NOT EXISTS `userdetails` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Email_ID` varchar(255) NOT NULL,
  `Passwor` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

-- Dumping data for table searchapp.userdetails: ~2 rows (approximately)
/*!40000 ALTER TABLE `userdetails` DISABLE KEYS */;
INSERT INTO `userdetails` (`ID`, `Username`, `Email_ID`, `Passwor`) VALUES
	(2, 'TestU', 'TestE', 'TestP'),
	(31, 'Anshul', 'anshul', 'Ans');
/*!40000 ALTER TABLE `userdetails` ENABLE KEYS */;

-- Dumping structure for table searchapp.userhistory
CREATE TABLE IF NOT EXISTS `userhistory` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` varchar(255) NOT NULL,
  `History` varchar(255) DEFAULT NULL,
  `Search_On` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Dumping data for table searchapp.userhistory: ~11 rows (approximately)
/*!40000 ALTER TABLE `userhistory` DISABLE KEYS */;
INSERT INTO `userhistory` (`ID`, `UserID`, `History`, `Search_On`) VALUES
	(1, 'TestU', 'ph', '2018-11-12 11:26:46'),
	(2, 'TestU', 'ph', '2018-11-12 11:26:46'),
	(3, 'TestU', 'daws', '2018-11-12 11:41:17'),
	(4, 'TestU', 'PHP', '2018-11-12 12:28:01'),
	(5, 'TestU', 'php', '2018-11-12 15:15:01'),
	(6, 'TestU', 'php', '2018-11-12 15:15:01'),
	(7, 'TestU', 'php', '2018-11-12 15:15:01'),
	(8, 'TestU', 'phpczxc', '2018-11-12 15:15:01'),
	(9, 'TestU', 'phpczxc', '2018-11-12 15:15:01'),
	(10, 'TestU', 'php', '2018-11-12 16:45:39'),
	(11, 'TestU', 'Angular', '2018-11-12 17:03:21');

