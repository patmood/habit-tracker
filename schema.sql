--
-- PostgreSQL database dump
--

CREATE TABLE journal_entries (
    id serial primary key,
    ts timestamp without time zone,
    type text NOT NULL,
    facts text NOT NULL
);
