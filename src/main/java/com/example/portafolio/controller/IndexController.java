package com.example.portafolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/inicio")
    public String inicio(){
        return "index";
    }
}
