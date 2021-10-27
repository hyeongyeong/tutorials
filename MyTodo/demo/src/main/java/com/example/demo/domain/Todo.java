package com.example.demo.domain;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
// 생성자에 인자가 많을 때 빌더 패턴
// builder 패턴 : 객체의 생성 과정과 표현 방법을 분리하여 동일한 생성 절차에서 서로 다른 표현 결과를 만들 수 있게 하는 패턴이다.
// EX) val member = Member(name="hyeon", job = "developer")
// ref. https://zorba91.tistory.com/298
@Builder
// 클래스에 존재하는 모든 필드에 대한 생성자를 자동으로 생성
@AllArgsConstructor
// parameter가 없는 생성자 생성
@NoArgsConstructor(access = AccessLevel.PROTECTED)
// JPA를 사용할 클래스 명시, 테이블과 매핑
@Entity
@Table(name="todo")
public class Todo implements Serializable {
    @Id
//    키값의 자동 생성 전략 설정, MySQL에서 Auto increment를 사용하기 때문에 Identity 사용
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pid;

    @Column(nullable = false, length = 200)
    private String content;

    @Column(nullable = false)
    private Boolean state;

    @Column(name="create_date")
    private LocalDate createDate;

    @Column(name="completed_date")
    private LocalDate completedDate;

    // 새로운 항목을 등록하는 함수
    public void regist() {
        this.state = false;
        this.createDate = LocalDate.now();
    }

    // 항목의 state를 변경하는 함수
    public void updateState() {
        this.state = !this.getState();
        this.completedDate = this.state ? LocalDate.now() : null;
    }

    // 항목의 content를 변경하는 함수
    public void updateContent(String content) {
        this.content = content;
    }

    // TODO: 왜 필요한지 아직 모르겠음.
    public Todo(String content, Boolean state, LocalDate createDate, LocalDate completedDate){
        this.content = content;
        this.state = state;
        this.createDate = createDate;
        this.completedDate = completedDate;
    }
}
