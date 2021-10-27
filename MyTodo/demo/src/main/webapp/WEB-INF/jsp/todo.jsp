<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html lang="ko">
    <head>
        <link href="/resources/css/todo.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="http://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> HK Todo List</title>
    </head>
    <body class="center">
        <div class="content">
            <h1 class="todo-title"> <i class="fa fa-check bg-primary text-white rounded p-2"></i> My TODO</h1>
            <div class="todo-list">
                <c:forEach var="todo" items="${todoList}" varStatus="status">
                    <p><input type="checkbox" id=${todo.pid} class="checkbox" value=${todo.state} /><c:out value="${todo.content}" /><button class="todo-delete left-align" id=${todo.pid} ><i class="fa fa-close"></i></button></p>
                    <p> <span class="sub-title"> Create at : </span> <span class="todo-date">${todo.createDate}</span><span class="sub-title"> Completed : </span> <span class="todo-date">${todo.completedDate}</span></p>
                </c:forEach>
            </div>
            
            <div class="todo-create">
                <div class="todo-format" >
                    <input type="text" name="content" id="todo-content" placeholder="입력해주세요." class="input-text" required/> 
                    <input type="button" id="btn-add-todo" class="btn" value="Create Todo"/>
                </div>
                
            </div>
        </div>
    </body>
</html>


<script>
    $('.checkbox').each(function(){
        if(this.value == "true"){
            this.checked = true;
        }
    });

    $('#btn-add-todo').click(function() {
        var jsonData = JSON.stringify({
            content: $('#todo-content').val()
        });
        console.log(document.location.href);

        $.ajax({
            url: document.location.href +"/create",
            type: "POST",
            data: jsonData,
            contentType: "application/json",
            dataType: "json",
            success: function () {
                location.reload();
            },
            error: function () {
                alert('저장 실패!');
            }
        });
    });

    $('.todo-delete').click(function() {
        $.ajax({
            url: document.location.href+"/"+this.id,
            type: "DELETE",
            contentType: "application/json",
            dataType: "json",
            success: function () {
                location.reload();
            },
            error: function () {
                alert('저장 실패!');
            }
        });
    });

    $('.checkbox').click(function() {
        $.ajax({
            url: document.location.href+"/"+this.id,
            type: "PUT",
            contentType: "application/json",
            dataType: "json",
            success: function () {
                location.reload();
            },
            error: function () {
                alert('저장 실패!');
            }
        });
    });

    $(document).ready(function(){
        $('#todo-content').keypress(function(e){
        if(e.keyCode==13)
        $('#btn-add-todo').click();
        });
    });

</script>