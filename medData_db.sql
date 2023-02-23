CREATE DATABASE  IF NOT EXISTS `medData_db`;
USE `medData_db`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: medData_db
-- ------------------------------------------------------
-- Server version	5.7.41



--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;


--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;

INSERT INTO `user` VALUES (1,'Jorgim','Nenem','jnenem@gmail.com'),(2,'Manuel','Peres','mperes@bol.com.br'),(3,'Juscelino','Campos','jc@gmail.com');

UNLOCK TABLES;


-- Dump completed on 2023-02-22 20:01:43
