Table SoundRepo_Users: Related to the users:
    
    CREATE TABLE IF NOT EXISTS SoundRepo_Users(
    id VARCHAR(255) not null unique primary key,
    name VARCHAR(255) not null unique,
    email VARCHAR(255) not null unique,
    nickname VARCHAR(255) not null unique,
    password VARCHAR(255) not null);

------------------------------------------------

