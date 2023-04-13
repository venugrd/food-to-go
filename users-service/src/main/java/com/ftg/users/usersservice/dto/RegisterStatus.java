package com.ftg.users.usersservice.dto;

import lombok.Data;

@Data
public class RegisterStatus {

    private String status;

    public static RegisterStatus status(String status)
    {
        RegisterStatus r1 = new RegisterStatus();
        r1.setStatus(status);
        return r1;
    }
    
}
