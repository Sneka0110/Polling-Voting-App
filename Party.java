import javax.persistence.*;
import java.util.Date;

@Entity
public class Party {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String partyName;

    @Column(length = 50, nullable = false)
    private String partyId;

    private String partyImage;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdOn;

    // Getters and Setters
}
