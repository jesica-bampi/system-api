CREATE SCHEMA IF NOT EXISTS pg;

CREATE SEQUENCE pg.seq_categories;

CREATE SEQUENCE pg.seq_customer;

CREATE SEQUENCE pg.seq_order_items;

CREATE SEQUENCE pg.seq_orders;

CREATE SEQUENCE pg.seq_pay_titles;

CREATE SEQUENCE pg.seq_payment_types;

CREATE SEQUENCE pg.seq_products;

CREATE SEQUENCE pg.seq_receive_titles;

CREATE SEQUENCE pg.seq_sales;

CREATE SEQUENCE pg.seq_sales_items;

CREATE SEQUENCE pg.seq_stocks;

CREATE SEQUENCE pg.seq_suppliers;

CREATE SEQUENCE pg.seq_users;

CREATE  TABLE pg.categories ( 
	id                   bigint  NOT NULL ,
	description          varchar(100)  NOT NULL ,
	CONSTRAINT pk_categories_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.customer ( 
	id                   bigint  NOT NULL ,
	name                 varchar(100)  NOT NULL ,
	telephone            varchar(20)   ,
	adress               varchar(500)   ,
	CONSTRAINT pk_client_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.payment_types ( 
	id                   bigint  NOT NULL ,
	description          varchar(100)  NOT NULL ,
	CONSTRAINT pk_payment_type_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.products ( 
	id                   bigint  NOT NULL ,
	code                 varchar(30)  NOT NULL ,
	bar_code             varchar(30)   ,
	description          varchar(100)  NOT NULL ,
	price                numeric(15,4) DEFAULT 0 NOT NULL ,
	category_id          bigint  NOT NULL ,
	supplier_id          bigint  NOT NULL ,
	CONSTRAINT pk_products_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.suppliers ( 
	id                   bigint  NOT NULL ,
	description          varchar(100)  NOT NULL ,
	site                 varchar(100)   ,
	CONSTRAINT pk_suppliers_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.users ( 
	id                   bigint  NOT NULL ,
	name                 varchar(100)  NOT NULL ,
	"e-mail"             varchar(300)  NOT NULL ,
	"password"           varchar(500)  NOT NULL ,
	CONSTRAINT pk_users_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.orders ( 
	id                   bigint  NOT NULL ,
	order_code           varchar(30)  NOT NULL ,
	invoice              integer   ,
	supplier_id          bigint  NOT NULL ,
	total                numeric(15,4)  NOT NULL ,
	date_update          date DEFAULT current_date  ,
	paymente_type_id     bigint  NOT NULL ,
	total_paid           numeric(15,4) DEFAULT 0  ,
	obs                  varchar(100)   ,
	CONSTRAINT pk_o_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.pay_titles ( 
	id                   bigint  NOT NULL ,
	order_id             bigint  NOT NULL ,
	date_update          date DEFAULT current_date  ,
	"value"              numeric(15,4)  NOT NULL ,
	obs                  varchar(100)   ,
	CONSTRAINT pk_titles_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.sales ( 
	id                   bigint  NOT NULL ,
	customer_id          bigint  NOT NULL ,
	total_value          numeric(15,4)  NOT NULL ,
	seller               bigint  NOT NULL ,
	payment_type_id      bigint  NOT NULL ,
	date_update          date DEFAULT current_date  ,
	obs                  varchar(100)   ,
	CONSTRAINT pk_sales_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.sales_items ( 
	id                   bigint  NOT NULL ,
	sale_id              bigint  NOT NULL ,
	product_id           bigint  NOT NULL ,
	quantity             integer  NOT NULL ,
	unit_value           numeric(15,4)  NOT NULL ,
	discount             numeric(15,4) DEFAULT 0  ,
	total                numeric(15,4)  NOT NULL ,
	CONSTRAINT pk_sales_items_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.stocks ( 
	id                   bigint  NOT NULL ,
	product_id           bigint  NOT NULL ,
	date_updated         date DEFAULT current_date  ,
	quantity             integer  NOT NULL ,
	sale_id              bigint   ,
	order_id             bigint   ,
	CONSTRAINT pk_stocks_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.order_items ( 
	id                   bigint  NOT NULL ,
	num_order            bigint  NOT NULL ,
	product_id           bigint  NOT NULL ,
	price                numeric(15,4)  NOT NULL ,
	quantity             integer  NOT NULL ,
	total                numeric(15,4)  NOT NULL ,
	status               varchar(30)   ,
	CONSTRAINT pk_order_items_id PRIMARY KEY ( id )
 );

CREATE  TABLE pg.receive_titles ( 
	id                   bigint  NOT NULL ,
	sale_id              bigint  NOT NULL ,
	date_updated         date DEFAULT current_date  ,
	"value"              numeric(15,4)  NOT NULL ,
	obs                  varchar(100)   ,
	CONSTRAINT pk_receive_titles_id PRIMARY KEY ( id )
 );

ALTER TABLE pg.order_items ADD CONSTRAINT fk_order_items_id_order FOREIGN KEY ( num_order ) REFERENCES pg.orders( id );

ALTER TABLE pg.order_items ADD CONSTRAINT fk_order_items_product_id FOREIGN KEY ( product_id ) REFERENCES pg.products( id );

ALTER TABLE pg.orders ADD CONSTRAINT fk_order_id_supplier FOREIGN KEY ( supplier_id ) REFERENCES pg.suppliers( id );

ALTER TABLE pg.orders ADD CONSTRAINT fk_orders_payment_type_id FOREIGN KEY ( paymente_type_id ) REFERENCES pg.payment_types( id );

ALTER TABLE pg.pay_titles ADD CONSTRAINT fk_pay_titles_order_id FOREIGN KEY ( order_id ) REFERENCES pg.orders( id );

ALTER TABLE pg.products ADD CONSTRAINT fk_products_category_id FOREIGN KEY ( category_id ) REFERENCES pg.categories( id );

ALTER TABLE pg.receive_titles ADD CONSTRAINT fk_receive_titles_sale_id FOREIGN KEY ( sale_id ) REFERENCES pg.sales( id );

ALTER TABLE pg.sales ADD CONSTRAINT fk_sales_id_customer FOREIGN KEY ( customer_id ) REFERENCES pg.customer( id );

ALTER TABLE pg.sales ADD CONSTRAINT fk_sales_user_id FOREIGN KEY ( seller ) REFERENCES pg.users( id );

ALTER TABLE pg.sales ADD CONSTRAINT fk_sales_payment_type_id FOREIGN KEY ( payment_type_id ) REFERENCES pg.payment_types( id );

ALTER TABLE pg.sales_items ADD CONSTRAINT fk_sales_items_product_id FOREIGN KEY ( product_id ) REFERENCES pg.products( id );

ALTER TABLE pg.sales_items ADD CONSTRAINT fk_sales_items_sale_id FOREIGN KEY ( sale_id ) REFERENCES pg.sales( id );

ALTER TABLE pg.stocks ADD CONSTRAINT fk_stocks_product_id FOREIGN KEY ( product_id ) REFERENCES pg.products( id );

ALTER TABLE pg.stocks ADD CONSTRAINT fk_stocks_sale_id FOREIGN KEY ( sale_id ) REFERENCES pg.sales( id );

ALTER TABLE pg.stocks ADD CONSTRAINT fk_stocks_order_id FOREIGN KEY ( order_id ) REFERENCES pg.orders( id );

