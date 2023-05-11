<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:dp="http://www.datapower.com/extensions"
	xmlns:dpconfig="http://www.datapower.com/param/config"
    extension-element-prefixes="dp"
    exclude-result-prefixes="dp dpconfig">
	<xsl:output method="xml"/>
	<xsl:template match="/">
		<xsl:variable name="cert" select="dp:client-subject-dn()"/>
		<dp:set-variable name= "'var://context/cert/subjectdn'" value= "$cert"/>
		<xsl:variable name="AAAinfofile" select="document('local:///AAAConnectionPeer.xml')" />
		<xsl:for-each select = "$AAAinfofile/*[local-name()='AAAInfo']/*[local-name()='Authenticate']/*[local-name()='DN']">
		<xsl:variable name ="certAAA">
		<xsl:value-of select ="." />
		
		</xsl:variable>
		
		
			<xsl:if test = "$cert=$certAAA" >
				<xsl:value-of select ="$cert" />
			</xsl:if>
			
		</xsl:for-each>

	</xsl:template>
</xsl:stylesheet>