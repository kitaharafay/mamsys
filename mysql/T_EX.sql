use sc190730;
create table T_EX_USER (
	ID bigint(20) not null auto_increment comment '主键',
    NICK_NAME varchar(200) default null comment '昵称',
    USER_NAME varchar(100) default null comment '姓名',
    USER_PSD varchar(200) default null comment '密码',
    BIRTHDAY datetime default null comment '生日',  
    SEX char(1) default null comment '性别',
    MOBILE varchar(50) default null comment '手机',
    IS_DEL char(1) default null comment '是否删除',
    CREATER bigint(20) default null comment '创建人',
    CREATE_DATE datetime default current_timestamp comment '注册时间',
    UPDATE_DATE datetime default current_timestamp comment '修改时间',
    primary key(ID),
    unique key NICK_NAME(NICK_NAME)
)engine=InnoDB auto_increment=7122681 default charset=utf8 comment='用户表'