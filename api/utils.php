<?php

function reject(){
    header('Location: http://koulu.space/');
    die();
}

function loadTeacherByAppendedCode() {
    $code = ltrim($_SERVER['PATH_INFO'], "/");
    if (!ctype_alnum($code)) reject();
    $db = new KouluDb('./db/koulu.sqlite');
    $result = $db->getByCode($code);
    $teacher = $result->fetchArray();
    if($teacher == false) reject();
    return $teacher;
}

?>