drop table if exists school cascade;
CREATE TABLE school(
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,  
    image       TEXT,
    location    INTEGER
);

drop table if exists restriction cascade;
CREATE TABLE restriction(
    id          SERIAL PRIMARY KEY,
    name        TEXT UNIQUE,
    type        TEXT
);

\copy school(name,image,location) from 'starter_data/hh-schools.csv' delimiter ',' csv header;
\copy restriction(name,type) from 'starter_data/hh-restrictions.csv' delimiter ',' csv header;

