
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

LOCK TABLES `user` WRITE;

INSERT INTO `user` VALUES (6,'Juscelino','Campos','jc@gmail.com'),(7,'Pedrim','Danado','gato_sarado_na_cam@bol.com'),(8,'Pandeco','Viroka','glaglakinha_Sapekinha@gmail.com'),(9,'Thyrsim','Tired','Faaaala@gmail.com');

UNLOCK TABLES;

