package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table (name = "tb_score")
public class Score {
	@EmbeddedId
	private ScorePk id = new ScorePk();
	private Long value;
	
	
	public Score() {
	}

	//Method to set movie score
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	//Method to set user score
	public void setUser(User user) {
		id.setUser(user);
	}
	
	public ScorePk getId() {
		return id;
	}


	public void setId(ScorePk id) {
		this.id = id;
	}


	public Long getValue() {
		return value;
	}


	public void setValue(Long value) {
		this.value = value;
	}
	
	
	
}
